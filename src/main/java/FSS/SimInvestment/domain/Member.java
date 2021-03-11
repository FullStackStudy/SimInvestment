package FSS.SimInvestment.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter @Setter
public class Member {

    @Id @GeneratedValue
    @Column(name = "member_key")
    private Long key;

    private String id; // 중복 불가

    private String password;

    private String name;

    private int money;

    @OneToMany(mappedBy = "member")
    private List<Buy> buys;

}
