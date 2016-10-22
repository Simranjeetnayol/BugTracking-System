
app.controller('developerCtrl', function($scope,$routeParams){
    $scope.bugList=[];
    $scope.load=function(){
        console.log("load called");
        var dataofloc=JSON.parse(localStorage.getItem("data"));
        dataofloc.forEach(function(obj){
            var bugObj=new bug(obj.name,obj.desc,obj.user,obj.date,obj.status);
            $scope.bugList.push(bugObj);
        });
    }
    $scope.resolved=function(){
        count=0;
        $scope.bugList.filter(function(item){
            if (item.status=="green"){
                count++;
            }
        });
        return count;
    }
    $scope.issues=function(){
        count=0;
        $scope.bugList.filter(function(item){
            if (item.status=="red"){
                count++;
            }
        });
        return count;
    }
    $scope.verify=function(){
        count=0;
        $scope.bugList.filter(function(item){
            if (item.status=="orange"){
                count++;
            }
        });
        return count;
    }
    $scope.save=function(){
        localStorage.data=JSON.stringify($scope.bugList);
    }
    $scope.task=function(val){
        console.log("task called val : "+val+" status : "+$scope.bugList[val].status);
        if($scope.bugList[val].status=="red")
            $scope.bugList[val].status="orange";
        else if($scope.bugList[val].status=="orange")
            $scope.bugList[val].status="red";

    }
    function bug(name,desc,user,date,status){
        this.name=name;
        this.desc=desc;
        this.user=user;
        this.date=date;
        this.status=status;
    }
});