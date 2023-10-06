import { Component } from '@angular/core';
import { GameFlowService } from 'src/app/services/game-flow.service';
import { PlayerService } from 'src/app/services/player.service';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerModalComponent } from '../add-player-modal/add-player-modal.component';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	public form: FormGroup;
	public isFinished = true;
	public isDefaultBtnClicked = false;
	private audio: HTMLAudioElement;

	constructor(
		private playerService: PlayerService,
		public gameFlowService: GameFlowService,
		public dialog: MatDialog,
		private http: HttpClient
	) {
	}

	public onUnoClick(): void {
		if (this.audio) {
			this.audio.pause();
			this.audio = null;
			return;
		}
		this.audio = new Audio('assets/win.mp3');
		this.audio.play();
	}

	public onDefaultModeButtonClick(): void {
		this.playerService.toggleDefaultMode();
	}

	public onAddPlayerButton(): void {
		this.dialog.open(AddPlayerModalComponent);
	}

	public onEndGameButtonClick(): void {
		this.playerService.endGame();
		this.gameFlowService.gameOver();
		this.onUnoClick();
	}

	public onResetGameButtonClick(): void {
		if (this.audio) {

			this.audio.pause();
			this.audio = null;
		}

		this.playerService.resetGame();
		this.isDefaultBtnClicked = false;
		this.gameFlowService.newGame();
		this.gameFlowService.resetGameSubj.next();
	}

	public onStatisticsClick(): void {
		this.http.get('http://localhost:3000/test')
			.subscribe((response) => {
				console.log(response);
			}, error => {
				console.error(error);
			});
	}
}
