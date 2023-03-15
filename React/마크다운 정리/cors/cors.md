해당 오류는 CORS(Cross-Origin Resource Sharing) 정책에 위배된 경우 발생하는 것입니다. 이 오류는 다른 도메인의 서버에서 리소스를 가져오는 것을 방지하기 위해 브라우저에서 적용되는 보안 정책입니다.

서로 다른 도메인에서 데이터를 주고받을 때 CORS 오류가 발생할 수 있습니다. 예를 들어, React 애플리케이션이 localhost:8081에서 실행되고, Spring API가 localhost:12400에서 실행되는 경우, 브라우저는 이 두 도메인 간의 데이터 교환을 허용하지 않습니다.

이 문제를 해결하려면 Spring API에서 CORS 정책을 설정해야 합니다. Spring에서 CORS를 허용하려면 다음과 같이 설정하면 됩니다.

Spring API에서 @CrossOrigin 어노테이션 사용하기
가장 간단한 방법은 스프링 API의 컨트롤러 메서드에 @CrossOrigin 어노테이션을 추가하는 것입니다.

```java
Copy code
@RestController
@RequestMapping("/page1")
public class Page1Controller {

    @GetMapping("/testmessage")
    @CrossOrigin(origins = "http://localhost:8081")
    public String testMessage() {
        return "This is a test message.";
    }

}
```

위 코드에서 @CrossOrigin(origins = "http://localhost:8081") 부분은 http://localhost:8081 도메인에서의 요청만 허용한다는 의미입니다. 다른 도메인에서의 요청은 모두 차단됩니다.

Spring API에서 CorsFilter 사용하기
또 다른 방법은 CorsFilter를 사용하여 전역적으로 CORS 정책을 설정하는 것입니다. 이 방법은 다음과 같이 구현할 수 있습니다.

```java
Copy code
@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("http://localhost:8081");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

}
```

위 코드에서 CorsConfig 클래스는 전역적으로 CORS 정책을 설정합니다. addAllowedOrigin(), addAllowedHeader(), addAllowedMethod() 메서드를 사용하여 허용할 도메인, 요청 헤더, 요청 메서드를 설정할 수 있습니다. 위 코드에서는 http://localhost:8081 도메인에서의 모든 요청을 허용하도록 설정되어 있습니다.

이렇게 설정한 후에는 React 애플리케이션이 localhost:8081에서 실행되고, Spring API가 localhost:12400에서 실행될 때 CORS 오류가 발생하지 않도록 할 수 있습니다.
