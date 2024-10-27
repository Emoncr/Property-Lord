import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const ChatsUser = ({ friends, onSelectFriend, selectedFriend }) => {
    return (
        <div className="w-64 overflow-hidden rounded-lg bg-white shadow-md">
            <h2 className="bg-gray-100 p-4 text-lg font-semibold">Friends</h2>
            <ScrollArea className="h-[calc(100vh-10rem)]">
                {friends.map((friend) => (
                    <div
                        key={friend.id}
                        className={`flex cursor-pointer items-center p-4 hover:bg-gray-100 ${
                            selectedFriend === friend.id ? 'bg-blue-100' : ''
                        }`}
                        onClick={() => onSelectFriend(friend.id)}
                    >
                        <Avatar className="mr-3">
                            <AvatarImage
                                src={friend.avatar}
                                alt={friend.name}
                            />
                            <AvatarFallback>{friend.name[0]}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{friend.name}</span>
                    </div>
                ))}
            </ScrollArea>
        </div>
    );
};

export default ChatsUser;
