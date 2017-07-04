/**
 * Created by dumengzhu on 17/7/3.
 */
angular.module("app",[])
.controller("MyCtrl",function($scope){
    $scope.msg="";
    $scope.user={uname:'',pwd:''};
    $scope.errormsg="";
    $scope.reverse=function(){
        return $scope.msg.split("").reverse().join("");
    }
    $scope.login=function(){
        if($scope.user.uname=="admin" && $scope.user.pwd=="123"){
            alert("success");
        }else{
            $scope.errormsg="login failed";

        }    }
})