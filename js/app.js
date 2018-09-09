var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "qnffngofl@naver.com";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "권형근";
		$rootScope.MenuList = [
			"안녕하세요 저는 권형근입니다.",
			"항상 긍적인 마인드로 생활하겠습니다.",
		    "감사합니다.",
		    "보유기술은 아래와 같습니다.",
			"JAVA, Html, CSS, JavaScript",
			"jQuery, Maven, Httpd, Spring",
			"Hadoop, MariaDB, Linux, Python",
			"Github, Shell Script"
            		];
		
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "../images/skill2.png", 
			 title: "About",
			 name: "Me",
			 img: "../images/skill.png",
			 img2: "../images/skill.png",
			 type : false,
			 contents: ""
			},{
			 path: "portfolio/",
			 url : "personal/Soccer Chart.pdf", 
			 title: "Personal",
			 name: "Project",
			 img: "personal/Soccer Chart.gif",
			 img2: "personal/Soccer Chart.gif",
			 type : false,
			 contents: " 처음으로 개발한 개인 프로젝트여서 초반 설계단계부터 더 심혈을 기울여서 한것 같습니다. 개발 도중 문제점도 많이 생기고 기존에 팀 프로젝트에서 개발했던 웹 뿐만 아니라 HADOOP기능까지 넣어서 개발을 했기 때문에 매우 힘들었지만 그래도 끝까지 혼자서 프로젝트 하나를 개발했다는 점에서 매우 뿌듯하고 너무나 소중한 시간이었습니다. HADOOP Map Reduce 뿐만 아니라 Spring Framework도 이용하고 데이터 베이스도 연결해 간단한 회원가입, 게시판기능도 구현 하였으며 팀 프로젝트때 하지 못해 아쉬웠던 페이징 기법과 댓글 기능을 구현해 기뻤고, jQuery를 사용해 정규표현식으로 회원가입 로그인 게시판 글쓰기등을 예외처리 한 부분도 재밌게 했던것 같습니다. "
			},{
			 path: "",
			 url : "https://www.dropbox.com/s/lwex8nh7dy3aobx/personal.mp4?dl=0", 
			 title: "Personal Project Media",
			 name: "Project",
			 img: "personal/PersonalMedia.png",
			 img2: "personal/PersonalMedia.png",
			 type : false, 
			 contents: ""
			},{
			 path: "portfolio/",
			 url : "team/TeamProjectUI.pdf", 
			 title: "Team(UI)",
			 name: "Project",
			 img: "team/TeamProjectUI.gif",
			 img2: "team/TeamProjectUI.gif",
			 type : true, 
			 contents: "처음으로 제대로 해본 팀 프로젝트여서 팀원들에게 피해가 가지 않을까 걱정을 했었습니다. 그래서 최대한 프로젝트 기간내에 내가 맡은 역할을 다 하려고 노력을 하였으나 UI에 평소 자신이 없어 많은 어려움이 있었습니다. 하지만 팀원들끼리  서로 도와가며 했기 때문에 무사히 UI프로젝트를 마칠 수 있었습니다. 제 첫 화면 구현이기 때문에 많이 부족한면이 있습니다. 하지만 처음으로 무언갈 끝까지 해본 경험이기 때문에 제 자신에게는 정말로 중요한 시간이었으며 기능구현은 없었지만 개발에 대해 관심을 가지게 된 계기가 되었습니다."
			},{
			 path: "portfolio/",
			 url : "personal/Movinity.pdf", 
			 title: "Personal UI 기능구현",
			 name: "Project",
			 img: "personal/Movinity.gif",
			 img2: "team/TeamProjectUI.gif",
			 type : false, 
			 contents: "이전에 팀프로젝트로 구현한 UI 화면에 기능을 구현한 시간이었습니다. 처음으로 기능을 구현해 봤는데 막상 배운걸 토대로 해보려니 미숙해 어려움이 많았습니다. 게다가 초기 계획 단계에서 계획을 너무 크게 잡는 바람에 구현하지 못한 페이지가 많아 속상했습니다. 또한 세부적으로 구현하고 싶었던 게시판 페이징 기능도 구현하지 못해 아쉬웠습니다. 다음 프로젝트때는 이 부분을 보완해 구현해보지 못한 기능들을 구현하고 싶고 초기 설계 단계에서의 계획이 매우 중요하단걸 깨닫게 되는 시간이어서 소중한 시간이었던것 같습니다. 다음에는 꼭 개인프로젝트때 구현해보지 못한 기능들을 구현해보고 싶습니다."
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});
