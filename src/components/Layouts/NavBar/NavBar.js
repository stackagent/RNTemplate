import React from 'react';
import { Footer, FooterTab, Button, Icon } from 'native-base';
export class NavBar extends React.Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button
                        onPress={() => this.props.navigation.navigate('About')}
                    >
                        <Icon name="navigate" />
                    </Button>
                    <Button
                        active
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon active name="home" />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}