app.controller('testerCtrl', function($scope,$routeParams){
 $scope.bugList=[];
 $scope.completed=function(){
  count=0;
  $scope.bugList.filter(function(item){
   if (item.status=="green"){
    count++;
   }
  });
  return count;
 }
 $scope.pending=function(){
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
 $scope.sort=function(val){
  console.log("sort for "+val );
  //$scope.bugList.sort(val);
  $scope.bugList.sort(function(item){
   return item.status!=val;
  });

 /* var sortedList=[];
  $scope.bugList.filter(function(item){
   if (item.status==val){
    sortedList.push(item);
   }
  });
  $scope.bugList=sortedList;*/
 }
 $scope.add=function(){
  //var bugObj=new bug($scope.name,$scope.desc,$scope.username,$scope.date,$scope.status)
  //$scope.status={color:'red'};
  var bugObj=new bug($scope.name,$scope.desc,$scope.username,$scope.date,$scope.status);
  $scope.bugList.push(bugObj);
 }
 $scope.statusfunc=function(val){
  if(val=="red")
   $scope.status="red";
   //$scope.status={color:'red'};
  if(val=="orange")
   $scope.status="orange";
   //$scope.status={color:'orange'};
  if(val=="green")
   $scope.status="green";
 }
 $scope.save=function(){
  /*var previousData=[];
  previousData=JSON.parse(localStorage.getItem("data"));

  $scope.bugList.forEach(function(dataObj){
   previousData.push(dataObj);
  });
   localStorage.data=JSON.stringify(previousData);
  */
  localStorage.data=JSON.stringify($scope.bugList);
 }
 $scope.load=function(){
  var dataofloc=JSON.parse(localStorage.getItem("data"));
  if(dataofloc) {
   dataofloc.forEach(function (obj) {
    var bugObj = new bug(obj.name, obj.desc, obj.user, obj.date, obj.status);
    $scope.bugList.push(bugObj);
   });
  }

 }
 $scope.close=function(){
 localStorage.clear();
 }
 $scope.search=function(){

 }
 $scope.task=function(val){
  console.log("task called val : "+val+" status : "+$scope.bugList[val].status);
  if($scope.bugList[val].status=="red")
  $scope.bugList[val].status="green";
  else if($scope.bugList[val].status=="green")
   $scope.bugList[val].status="red";
  else if($scope.bugList[val].status=="orange")
   $scope.bugList[val].status="green";
 }
 function bug(name,desc,user,date,status){
  this.name=name;
  this.desc=desc;
  this.user=user;
  this.date=date;
  this.status=status;
 }
});