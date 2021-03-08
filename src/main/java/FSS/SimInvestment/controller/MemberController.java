package FSS.SimInvestment.controller;

import FSS.SimInvestment.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MemberController {

    @GetMapping("/login")
    public String login(Model model){
        model.addAttribute("user", new User());
        return "login";
    }

    @PostMapping("/login")
    public String result(@ModelAttribute User user, Model model){
        model.addAttribute("user", user);
        return "result";
    }
  
    public String clickedLoginButton()
    {

    }
}
