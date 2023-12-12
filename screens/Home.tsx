import { Button, Text } from '@gluestack-ui/themed';
import { View } from 'react-native';
import Card from '../components/home/Card';

export default function Home() {
    return (
        <View>
        <View className="flex flex-col items-center w-screen h-screen">
            <Card></Card>
    </View>
        </View>
    );
};