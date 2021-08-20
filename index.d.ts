import { NativeModule, View } from 'react-native';
interface RNZoomUsInitializeCommonParams {
    domain?: string;
    iosAppGroupId?: string;
    iosScreenShareExtensionId?: string;
}
export interface RNZoomUsInitializeParams extends RNZoomUsInitializeCommonParams {
    clientKey: string;
    clientSecret: string;
}
export interface RNZoomUsSDKInitParams extends RNZoomUsInitializeCommonParams {
    jwtToken: string;
}
declare function initialize(params: RNZoomUsInitializeParams | RNZoomUsSDKInitParams, settings?: {
    disableShowVideoPreviewWhenJoinMeeting?: boolean;
}): Promise<any>;
export interface RNZoomUsJoinMeetingParams {
    userName: string;
    meetingNumber: string | number;
    password?: string;
    participantID?: string;
    autoConnectAudio?: boolean;
    noAudio?: boolean;
    noVideo?: boolean;
    noInvite?: boolean;
    noBottomToolbar?: boolean;
    noPhoneDialIn?: boolean;
    noPhoneDialOut?: boolean;
    noMeetingEndMessage?: boolean;
    noMeetingErrorMessage?: boolean;
    noShare?: boolean;
    noTitlebar?: boolean;
    noButtonLeave?: boolean;
    noButtonMore?: boolean;
    noButtonParticipants?: boolean;
    noButtonShare?: boolean;
    noTextMeetingId?: boolean;
    noTextPassword?: boolean;
    zoomAccessToken?: string;
    webinarToken?: string;
    zoomView?: any;
    frame: {x: number, y: number, width: number, height: number}
}
declare function joinMeeting(params: RNZoomUsJoinMeetingParams): Promise<any>;
declare function joinMeetingWithPassword(...params: any[]): Promise<any>;
export interface RNZoomUsStartMeetingParams {
    userName: string;
    meetingNumber: string | number;
    userId: string;
    userType?: number;
    zoomAccessToken: string;
    noInvite?: boolean;
    noButtonLeave?: boolean;
    noButtonMore?: boolean;
    noButtonParticipants?: boolean;
    noButtonShare?: boolean;
    noTextMeetingId?: boolean;
    noTextPassword?: boolean;
}
declare function startMeeting(params: RNZoomUsStartMeetingParams): Promise<any>;
declare function leaveMeeting(): Promise<any>;
declare function dismissZoom(): Promise<any>;
declare function connectAudio(): Promise<any>;
export declare const ZoomEmitter: NativeModule;
declare const _default: {
    initialize: typeof initialize;
    joinMeeting: typeof joinMeeting;
    joinMeetingWithPassword: typeof joinMeetingWithPassword;
    startMeeting: typeof startMeeting;
    leaveMeeting: typeof leaveMeeting;
    connectAudio: typeof connectAudio;
    dismissZoom: typeof dismissZoom;
};
export default _default;
