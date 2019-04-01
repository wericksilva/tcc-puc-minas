package br.com.api.puc.minas.loja.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EnvioEmail {

	@Autowired
    private JavaMailSender mailSender;

    public void enviar(String email, String assunto, String mensagem) {
        SimpleMailMessage emailMen = new SimpleMailMessage();
        emailMen.setTo(email);

        emailMen.setSubject(assunto);
        emailMen.setText(mensagem);
       
        mailSender.send(emailMen);
    }
}