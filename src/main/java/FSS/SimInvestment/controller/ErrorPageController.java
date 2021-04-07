package FSS.SimInvestment.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ErrorPageController implements ErrorController {

    @GetMapping({"/", "/error"})
    public String home()
    {
        return "index.html";
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }

}
