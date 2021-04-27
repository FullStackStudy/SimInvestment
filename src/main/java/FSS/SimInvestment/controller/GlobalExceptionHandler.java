package FSS.SimInvestment.controller;

import FSS.SimInvestment.dto.ResponseForm;
import FSS.SimInvestment.dto.StatusEnum;
import FSS.SimInvestment.exception.NotValidCountException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalStateException.class)
    protected ResponseEntity<ResponseForm> illegalStateException(IllegalStateException e)
    {
        ResponseForm exceptionResponse =  new ResponseForm(StatusEnum.BAD_REQUEST, e.getMessage());
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NotValidCountException.class)
    protected ResponseEntity<ResponseForm> notValidCountException(NotValidCountException e)
    {
        ResponseForm exceptionResponse =  new ResponseForm(StatusEnum.BAD_REQUEST, e.getMessage());
        return new ResponseEntity<>(exceptionResponse, HttpStatus.BAD_REQUEST);
    }
}
