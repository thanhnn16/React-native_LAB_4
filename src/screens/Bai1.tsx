import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {myStyles} from '../myStyles.tsx';
import React from 'react';

type ContactType = {
  name: string;
  email: string;
  position: string;
  photo: string;
};

export const ContactItem = ({contact}: {contact: ContactType}) => (
  <View style={myStyles.listItem}>
    <Image source={{uri: contact.photo}} style={myStyles.avatar} />
    <View style={myStyles.bodyItem}>
      <Text style={myStyles.nameText}>{contact.name}</Text>
      <Text>{contact.position}</Text>
    </View>
    <TouchableOpacity style={myStyles.btnCall}>
      <Text style={myStyles.callText}>Call</Text>
    </TouchableOpacity>
  </View>
);

export const Bai1 = () => {

  return (
    <View style={myStyles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <ContactItem contact={item} />}
        keyExtractor={item => item.email}
      />
    </View>
  );
};
