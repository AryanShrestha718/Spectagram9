import React, { Component } from 'react';
import { Text, View, Image,  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Feed extends Component {
    render() {
        return (
            <View>
                <View>
                  <View>
                    <View>
                        <Image
                            source={require("../assets/profile_img.png")}
                            style={styles.profileImage}
                        ></Image>
                    </View>
                    <View style={styles.authorNameContainer}>
                        <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                    </View>       
                  </View>     
                  <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                  <View style={styles.captionContainer}>
                    <Text style={styles.captionText}>
                            {this.props.post.caption}
                    </Text>
                  </View>
                  <View>
                    <View>
                        <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                        <Text style={styles.likeText}>12k</Text>
                    </View>
                  </View>
                </View>
            </View>
        );
    }
}