package FSS.SimInvestment.domain;

import FSS.SimInvestment.exception.NotValidCountException;
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

    private String tel;

    private String email;

    private int money;

    @OneToMany(mappedBy = "member")
    private List<Buy> buys;

    public void removeMoney(int price)
    {
        int restMoney = this.money - price;
        if(restMoney < 0)
        {
            throw new NotValidCountException("구매 수량이 보유 금액을 넘었습니다.");
        }
        else
        {
            this.money = restMoney;
        }
    }

    public void addMoney(int price)
    {
        this.money += price;
    }

}
