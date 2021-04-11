package FSS.SimInvestment.util;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

@Component
public class LoginSessionInterceptor implements HandlerInterceptor {
    public List loginEssential
            = Arrays.asList("/member/**");

    public List loginInessential
            = Arrays.asList("/th/**");

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Long loginKey = (Long)request.getSession().getAttribute("loginKey");

        if(loginKey != null){
            request.getSession().setMaxInactiveInterval(18000); // 30min timeout
            return true;}

        else{
            String destUri = request.getRequestURI();
            String destQuery = request.getQueryString();
            String dest = (destQuery == null) ? destUri : destUri+"?"+destQuery;
            request.getSession().setAttribute("dest", dest);

            response.sendRedirect("/");
            return false;
        }
    }
}
