import React, { useState } from "react";
import { 
    View,
    TextInput,
    ScrollView,
    Button,
    Text,
} from "react-native";

export type Props = {
    name?: string;
    baseEnthusiasmLevel?: number;
    children?: JSX.Element | JSX.Element[]
}

export const Hello: React.FC<Props> = ({name, baseEnthusiasmLevel = 0}) => {
    const [enthusiasmLevel, setEnthusiasmLevel] = useState(baseEnthusiasmLevel)

    const onIncrement = () => setEnthusiasmLevel(enthusiasmLevel + 1)
    const onDecrement = () => setEnthusiasmLevel(
        enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0
    )

    const getExclamationMarks = (numChar:number) => {
        numChar > 0 ? Array(numChar + 1).join('!') : ''
    }

    return (
        <View className="flex-1 justify-center">
            <Text className="mt-40">
                <>
                Hello {name}
                {getExclamationMarks(enthusiasmLevel)}
                </>
            </Text>
            <View>
                <Button 
                    onPress={onIncrement}
                    title="increase enthusiasm"
                    accessibilityLabel="increment"
                />
                <Button 
                    onPress={onDecrement}
                    title="decrease enthusiasm"
                    accessibilityLabel="decrement"
                />
            </View>
        </View>
    )
}