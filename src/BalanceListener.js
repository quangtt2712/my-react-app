import React, { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';

const BalanceListener = ({ userId }) => {
    const [connection, setConnection] = useState(null);

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('/balanceHub') // Địa chỉ của SignalR hub
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, []);

    useEffect(() => {
        if (connection) {
            connection.start()
                .then(() => {
                    console.log('Connection to hub established');
                    connection.invoke('ListenForBalanceChanges', userId); // Gọi phương thức từ hub
                })
                .catch(error => console.error(error));

            connection.on('ReceiveBalance', balance => {
                console.log('New balance received:', balance);
                // Xử lý số liệu mới nhận được ở đây
            });
        }
    }, [connection, userId]);

    return <div>Listening for balance changes...</div>;
};

export default BalanceListener;
