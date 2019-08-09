import { Component } from '@angular/core';
import { PatternMap } from 'src/interfaces/patternMap';
import { patternMap } from 'src/config/patternMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  camera = false;
  patternMap: PatternMap[];

  constructor() {
    this.patternMap = patternMap;
  }

  startRecording() {
    this.camera = true;
  }

  endRecording() {
    this.camera = false;
  }

  getPatternPath(patternName: string) {
    return `../assets/patterns/${patternName}.patt`;
  }

  getObjPath(objName: String) {
    return `../assets/models/${objName}.obj`;
  }

  getMtlPath(mtlName: String) {
    return `../assets/models/${mtlName}.mtl`;
  }

  getObjectModelPath(entity: PatternMap) {
    if (entity.model.obj && entity.model.mtl)
      return `obj: url(${this.getObjPath(entity.model.obj)}); mtl: url(${this.getMtlPath(entity.model.mtl)})`;
    else
      return `obj: url(${this.getObjPath(entity.model.obj)})`;
  }
}
