package FSS.SimInvestment.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Data
public class ResponseForm {

    private StatusEnum statusEnum;
    private String message;
    private Object data;

    public ResponseForm()
    {
        statusEnum = null;
        message = null;
        data = null;
    }

    public ResponseForm(StatusEnum statusEnum, String message, Object data) {
        this.statusEnum = statusEnum;
        this.message = message;
        this.data = data;
    }

    public ResponseForm(StatusEnum statusEnum) {
        this.statusEnum = statusEnum;
        this.message = null;
        this.data = null;
    }

    public ResponseForm(StatusEnum statusEnum, String message) {
        this.statusEnum = statusEnum;
        this.data = null;
        this.message = message;
    }

    public ResponseForm(StatusEnum statusEnum, Object data) {
        this.statusEnum = statusEnum;
        this.message = null;
        this.data = data;
    }
}
