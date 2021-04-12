package FSS.SimInvestment.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Setter @Getter
public class SignUpForm {

    @NotEmpty(message = "아이디는 필수입니다")
    private String id;

    @NotEmpty(message = "비밀번호는 필수입니다")
    private String password;

    @NotEmpty(message = "이름은 필수입니다")
    private String name;

    private String tel;
    private String email;
}
