package br.com.task.puc.minas.monitoramento;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@EnableScheduling
public class SchedulingTask {
	
    private final long MINUT = 1000 * 10;
	
	@Scheduled(fixedDelay = MINUT)
	public void scheduleFutureTask() {
		System.out.println("schedule ok!");
	}
}
