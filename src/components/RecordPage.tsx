
// AndroidManifest.xml에서
// <uses-permission android:name="android.permission.RECORD_AUDIO" />
// <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
// <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
// 추가
//에뮬레이터 설정-Microphone-전부켜기

//저장 이름 변경해야함.

import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType,
} from 'react-native-audio-recorder-player';

import React, {Component} from 'react';
import {PermissionsAndroid,
    Button,
    View,
    Text,
    Platform} from "react-native";

type RecordPageProps = {}

type RecordPageState = {
    isLoggingIn: false,
    recordSecs: number,
    recordTime: string,
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: string,
    duration: string,
}

export default class RecordPage extends Component<RecordPageProps, RecordPageState> {
    private audioRecorderPlayer: AudioRecorderPlayer;
    constructor(props : RecordPageProps) {
        super(props);
        this.state = {
            isLoggingIn: false,
            recordSecs: 0,
            recordTime: "00:00:00",
            currentPositionSec: 0,
            currentDurationSec: 0,
            playTime: '00:00:00',
            duration: '00:00:00',
        };
        this.audioRecorderPlayer = new AudioRecorderPlayer();
        this.audioRecorderPlayer.setSubscriptionDuration(0.09); // optional. Default is 0.1
    }
    render() {
        return (
            <View>
                <Text>{this.state.recordTime}</Text>
                <Button
                    title="RECORD"
                    onPress={() => this.onStartRecord()}
                />
                <Button
                    title="STOP"
                    onPress={() => this.onStopRecord()}
                />
                <Text>{this.state.playTime}</Text>
                <Button
                    title="PLAY"
                    onPress={() => this.onStartPlay()}
                />
                <Button
                    title="STOP"
                    onPress={() => this.onStopPlay()}
                />
            </View>
        );
    }

    //30초 이내로 말하기
    onStartRecord = async() => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'Permissions for write access',
                        message: 'Give permission to your storage to write a file',
                        buttonPositive: 'ok',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the storage');
                } else {
                    console.log('permission denied');
                    return;
                }
            } catch (err) {
                console.warn(err);
                return;
            }
        }
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                    {
                        title: 'Permissions for write access',
                        message: 'Give permission to your storage to write a file',
                        buttonPositive: 'ok',
                    },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the camera');
                } else {
                    console.log('permission denied');
                    return;
                }
            } catch (err) {
                console.warn(err);
                return;
            }
        }
        const path = Platform.select({
            android: 'sdcard/Download/yejin.wav'
        });
        const audioSet: AudioSet = {
            AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
            AudioSourceAndroid: AudioSourceAndroidType.MIC,
            AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
            AVNumberOfChannelsKeyIOS: 2,
            AVFormatIDKeyIOS: AVEncodingOption.aac,
        };
        console.log('audioSet', audioSet);
        const uri = await this.audioRecorderPlayer.startRecorder(path, audioSet);
        this.audioRecorderPlayer.addRecordBackListener((e: { current_position: number; }) => {
            this.setState({
                recordSecs: e.current_position,
                recordTime: this.audioRecorderPlayer.mmssss(
                    Math.floor(e.current_position),
                ),
            });
        });
        console.log(`uri: ${uri}`);
    };

    onStopRecord= async () => {
        const result = await this.audioRecorderPlayer.stopRecorder();
        this.audioRecorderPlayer.removeRecordBackListener();
        this.setState({
            recordSecs: 0,
        });
        console.log(result);
    };

    onStartPlay = async () => {
        console.log('onStartPlay');
        const path = Platform.select({
            android: 'sdcard/Download/yejin.wav',
        });
        const msg = await this.audioRecorderPlayer.startPlayer(path);
        await this.audioRecorderPlayer.setVolume(1.0);
        console.log(msg);
        this.audioRecorderPlayer.addPlayBackListener((e: any) => {
            if (e.current_position === e.duration) {
                console.log('finished');
                this.audioRecorderPlayer.stopPlayer();
            }
            this.setState({
                currentPositionSec: e.current_position,
                currentDurationSec: e.duration,
                playTime: this.audioRecorderPlayer.mmssss(
                    Math.floor(e.current_position),
                ),
                duration: this.audioRecorderPlayer.mmssss(Math.floor(e.duration)),
            });
        });
    };

    onStopPlay = async() => {
        console.log('onStopPlay');
        await this.audioRecorderPlayer.stopPlayer();
        this.audioRecorderPlayer.removePlayBackListener();
    }
}
