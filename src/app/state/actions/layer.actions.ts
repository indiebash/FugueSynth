import { Action } from '@ngrx/store';
import { Layer } from '../../models';
import { PlaybackType } from 'src/app/enums';

export enum ActionTypes {
  AddLayer = 'Add Layer',
  SetPlaybackRate = 'Set PlaybackRate',
  SetOctave = 'Set Octave',
  SetPlaybackType = 'Set Playback Type',
  SetPitch = 'Set Pitch',
  SetPlaying = 'Set Playing',
  SetOutput = 'Set Output'
}
 
export class AddLayer implements Action {
  readonly type = ActionTypes.AddLayer;
  constructor(public payload: Layer) {}
}

export class SetPlaybackRate implements Action {
  readonly type = ActionTypes.SetPlaybackRate;
  constructor(public payload: {index: number, value: number}) {}
}

export class SetOctave implements Action {
  readonly type = ActionTypes.SetOctave;
  constructor(public payload: {index: number, value: number}) {}
}

export class SetPlaybackType implements Action {
  readonly type = ActionTypes.SetPlaybackType;
  constructor(public payload: {index: number, value: PlaybackType}) {}
}

export class SetPitch implements Action {
  readonly type = ActionTypes.SetPitch;
  constructor(public payload: {index: number, value: number}) {}
}

export class SetPlaying implements Action {
  readonly type = ActionTypes.SetPlaying;
  constructor(public payload: {index: number, value: boolean}) {}
}

export class SetOutput implements Action {
  readonly type = ActionTypes.SetOutput;
  constructor(public payload: {index: number, value: number}) {}
}

export type LayerAction = {type: ActionTypes, payload: any}