import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable({
    providedIn: 'root'
})
export class AudioService {
    private currentAudio: Howl | null = null;

    constructor() { }

    playAudio(audioPath: string) {
    if (this.currentAudio && this.currentAudio.playing()) {
        return; // Si ya hay un audio reproduciéndose, no hagas nada
    }

    this.currentAudio = new Howl({
        src: [audioPath],
        onend: () => {
        if (this.currentAudio) {
            this.currentAudio.unload();
            this.currentAudio = null;
        }
        }
    });

    this.currentAudio.play();
    }

    isAudioPlaying(): boolean {
    return this.currentAudio !== null && this.currentAudio.playing();
    }
}
