import { Timestamp } from "firebase/firestore";
import { User } from "firebase/auth";

export type GlobalUser = User & DbUser

export type DbUser = {
    id: string;
    name: string;
    email: string;
    slogan?: string;
    local?: string;
    links?: string;
    profilePicture?: string;
}

export interface UserMessageObject {
    id: String,
    type: String
    text: String,
    attachments: Object[],
    timestamp: Timestamp,
    sender: {
        id: String,
        profilePicture: String,
        name: String
    },
}

export interface UserSendMessageObject {
    type: 'text'
    text: String,
    attachments: Object[],
    timestamp: Timestamp,
    sender: {
        id: String,
        profilePicture: String,
        name: String
    },
}

export interface GetUserResponse {
    hasUser: boolean;
    user: User | undefined;
}

export interface UserMessage {
    type: 'text';
    text: string,
    sender: {
        id: string;
        name: string;
        profilePicture?: string;
    },
    attachments?: string
}

export interface FormattedUserMessage {
    id: string;
    type: 'text';
    text: string,
    sender: {
        id: string;
        name: string;
        profilePicture?: string;
    },
    attachments?: string
    timestamp: Timestamp
}

export interface UserPermissionObject {
    userID: string;
    isAdmin: boolean;
}


export interface ChannelObject {
    channelId: string,
    name: string,
    index: number
}

export interface CommunityObject {
    communityId: string,
    name: string,
    slogan: string,
    thumbURL: string,
}