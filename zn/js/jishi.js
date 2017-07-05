angular.module("myapp",[]).controller("jishi",function($scope){
    $scope.data=localStorage.message?JSON.parse(localStorage.message):[];
    /*添加列表*/
    $scope.add=function(){
        var obj={};
        obj.id=maxid();
        obj.name="新建列表";
        obj.son=[];
        obj.son[0]=obj.name;
        $scope.data.push(obj);
        $scope.selectid=obj.id;
        $scope.listnum++;
        localStorage.message=JSON.stringify($scope.data);
    }
    $scope.listnum=$scope.data.length;
    $scope.selectid=$scope.data.length==0?"":1;
    $scope.addid=function(id){
        $scope.selectid=id;
    }
    $scope.change=function(id){
        for(i=0;i<$scope.data.length;i++){
            if($scope.data[i].id==id){
                $scope.data[i].son[0]=$scope.data[i].name;
                localStorage.message=JSON.stringify($scope.data);
            }
        }
    }
    $scope.dellist=function(id){
        for(i=0;i<$scope.data.length;i++){
            if($scope.data[i].id==id){
                $scope.data.splice(i,1);
                localStorage.message=JSON.stringify($scope.data);
            }
        }
    }
    function maxid(){
    	var id=0;
        var tempid=0;
        if($scope.data.length==0){
                id=1;
        }else{

              for(var i=0;i<$scope.data.length;i++){
                if($scope.data[i].id>tempid){
                    tempid=$scope.data[i].id

                }
              }

              id=tempid+1;
        }
        return id;
    }

})

