## Real Repo URI : https://github.com/Jay13Jeong/PinguPong
### 이 레포는 기존 프로젝트를 클라우드 서비스에 자동 배포하기 위해서 커스텀 되었습니다.
</br>

![캡처14](https://github.com/Jay13Jeong/PinguPongForAWS/assets/63899204/5031a76e-0b40-4544-9fc5-6371cf80ca82)

</br>

### 변경사항
- 구글 아이디 로그인만 지원합니다. 기존 42 API 로그인 기능은 FrontEnd만 주석처리되었습니다.
- FrontEnd에서 axios가 호출하는 주소가 스키마를 제거하고 경로만 호출합니다.
- BackEnd에서 URL을 사용할 때 스키마까지 포함되던 부분을 포함되지 않도록 수정되었습니다.
- 쿠키에 등록되는 JWT의  key 이름이 기존 'jwt' 에서 'p_login_jwt'로 수정되었습니다.
- Nginx의 외부포트가 80에서 8888로 수정되었습니다.
- 'docker-compose'로 빌드되던 부분을 Docker만으로 compose 옵션 사용가능하여 'docker compose'로 빌드됩니다.
- Make파일이 기본 빌드를 foreground에서 background로 빌드합니다.
- 자동배포를 위해 gradle.yml 파일이 추가되었습니다.
