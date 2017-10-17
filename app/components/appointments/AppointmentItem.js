import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';

export class AppointmentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: this.props.description,
            color: this.props.color,
            time: this.props.time,
            date: this.props.date,
            checked: false
        }
    }

    handleClick() {
        this.setState({checked: !this.state.checked})
    }

    removeAppointment() {
        this.props.handleRemove(this);
    }

    render() {
        const text = this.state.checked;
        return (
            <View style={{
                backgroundColor: '' + this.state.color,
                borderColor: '' + this.state.color
            }}>
                <View>
                    <View>
                        <Text>{this.state.description}</Text>
                    </View>
                    <View className="timeText">
                        <Text>{this.state.time}</Text>
                    </View>
                    <View className="dateText">
                        <Text>{this.state.date}</Text>
                    </View>
                </View>
                <View>
                    <Button
                        onPress={() => this.removeAppointment()}
                        title='remove'
                        fontFamily={'IntroRust'}
                        backgroundColor="#4CAF50"
                    />
                </View>
            </View>
        );
    }
}
