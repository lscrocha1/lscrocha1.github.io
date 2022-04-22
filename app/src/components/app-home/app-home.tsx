import { Component, h } from '@stencil/core';

@Component({
	tag: 'app-home',
	styleUrl: 'app-home.scss'
})
export class AppHome {
	render() {
		return [
			<div class="components">
				<app-profile></app-profile>
				<div>
					<app-about-me></app-about-me>
				</div>
			</div>
		];
	}
}
