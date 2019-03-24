package br.com.task.puc.minas.monitoramento;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MonitoramentoApplication {

	public static void main(String[] args) {
		SpringApplication.run(MonitoramentoApplication.class, args);
		
		SchedulingTask scheduling = new SchedulingTask();
		scheduling.scheduleFutureTask();
	}

}
