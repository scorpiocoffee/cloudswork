'use strict';

angular.module('cloudsApp').controller('ChatController', function($scope, $location, socket, randomColor, userService) {
	this.$location = $location;
	var messageWrapper= $('.message-wrapper');
	$scope.guides_status = false;
	$scope.hasLogined = false;

	$scope.receiver='';
    $scope.publicMessages=[];
    $scope.privateMessages={};
    $scope.messages=$scope.publicMessages;
    $scope.users=[];
    $scope.color=randomColor.newColor();
    $scope.login=function(){  
        socket.emit('addUser',{nickname:$scope.nickname,color:$scope.color});
    }
    $scope.scrollToBottom=function(){
        messageWrapper.scrollTop(messageWrapper[0].scrollHeight);
    }

    $scope.postMessage=function(){
        var msg={text:$scope.words,type:'normal',color:$scope.color,from:$scope.nickname,to:$scope.receiver};
        var rec=$scope.receiver;
        if(rec){  
           if(!$scope.privateMessages[rec]){
               $scope.privateMessages[rec]=[];
           }
            $scope.privateMessages[rec].push(msg);
        }else{ 
            $scope.publicMessages.push(msg);
        }
        $scope.words='';
        if(rec!==$scope.nickname) { 
            socket.emit('addMessage', msg);
        }
        else
        {
            alert('You cannot send message to yourself.');
            return;
        }
    }
    $scope.setReceiver=function(receiver){
        $scope.receiver=receiver;
        if(receiver){ 
            if(!$scope.privateMessages[receiver]){
                $scope.privateMessages[receiver]=[];
            }
            $scope.messages=$scope.privateMessages[receiver];
        }else{
            $scope.messages=$scope.publicMessages;
        }
        var user=userService.get($scope.users,receiver);
        if(user){
            user.hasNewMessage=false;
        }
    }


    socket.on('userAddingResult',function(data){
        if(data.result){
            $scope.userExisted=false;
            $scope.hasLogined=true;
        }else{
            $scope.userExisted=true;
        }
    });

    
    socket.on('userAdded', function(data) {
        if(!$scope.hasLogined) return;
        $scope.publicMessages.push({text:data.nickname,type:'welcome'});
        $scope.users.push(data);
    });

    
    socket.on('allUser', function(data) {
        if(!$scope.hasLogined) return;
        $scope.users=data;
    });

    
    socket.on('userRemoved', function(data) {
        if(!$scope.hasLogined) return;
        $scope.publicMessages.push({text:data.nickname,type:'bye'});
        for(var i=0;i<$scope.users.length;i++){
            if($scope.users[i].nickname==data.nickname){
                $scope.users.splice(i,1);
                return;
            }
        }
    });

    
    socket.on('messageAdded', function(data) {
        if(!$scope.hasLogined) return;
        if(data.to){ 
            if(!$scope.privateMessages[data.from]){
                $scope.privateMessages[data.from]=[];
            }
            $scope.privateMessages[data.from].push(data);
        }else{
            $scope.publicMessages.push(data);
        }
        var fromUser=userService.get($scope.users,data.from);
        var toUser=userService.get($scope.users,data.to);
        if($scope.receiver!==data.to) {
            if (fromUser && toUser.nickname) {
                fromUser.hasNewMessage = true;
            } else {
                toUser.hasNewMessage = true;
            }
        }
    });
});