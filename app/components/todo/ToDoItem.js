import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';

export default class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({checked: !this.state.checked});
    }
    render() {
        return (
            <View key={this.props.index} style={styles.itemTodo}>

                <View style={[{backgroundColor: this.props.color}, styles.categoryColorTodo]}/>
                <CheckBox
                    title={this.props.value}
                    key={this.props.index}

                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    onPress={() => {
                        this.handleClick();
                        this.props.onClick();
                    }}
                    textStyle={{fontFamily: 'IntroRust'}}
                    containerStyle={styles.checkboxTodo}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    categoryColorTodo: {
        height: '100%',
        width: '20%',

    },
    checkboxTodo: {
        width: '65%',
        borderColor: 'transparent',
        height:'100%',
        backgroundColor: 'white',

    },
    itemTodo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'grey',
        shadowOpacity: 0.15,

    }
});