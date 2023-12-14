window.addEventListener('beforeunload', function () {
    sessionStorage.setItem('scrollPosition', window.scrollY);
    });
    window.addEventListener('load', function () {
    var scrollPosition = sessionStorage.getItem('scrollPosition');
    
    if (scrollPosition !== null) {
        window.scrollTo(0, scrollPosition);
      sessionStorage.removeItem('scrollPosition'); // 위치를 사용한 후에는 삭제
    }
    });
