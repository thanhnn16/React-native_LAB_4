import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { myStyles } from "../myStyles.tsx";
import React from "react";

type ContactType = {
  name: string;
  email: string;
  position: string;
  photo: string;
};

export const ContactItem = ({ contact }: { contact: ContactType }) => (
  <View style={myStyles.listItem}>
    <Image source={{ uri: contact.photo }} style={myStyles.avatar} />
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
        renderItem={({ item }) => <ContactItem contact={item} />}
        keyExtractor={item => item.email}
      />
    </View>
  );
};

const data: ContactType[] = [
  {
    name: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    position: "Giám đốc",
    photo: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Nguyễn Văn B",
    email: "nguyenvanb@outlook.com",
    position: "Trưởng phòng",
    photo: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Nguyễn Văn C",
    email: "nguyenvanc@gmail.com",
    position: "Nhân viên",
    photo: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Nguyễn Văn D",
    email: "nguyenvand@gmail.com",
    position: "Nhân viên",
    photo: "https://i.pravatar.cc/150?img=4"
  },
  {
    name: "Nguyễn Văn E",
    email: "nguyenvane@gmail.com",
    position: "Nhân viên",
    photo: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Nguyễn Văn F",
    email: "nguyenvanf@gmail.com",
    position: "Nhân viên",
    photo: "https://i.pravatar.cc/150?img=6"
  },
  {
    name: "Nguyễn Văn G",
    email: "nguyenvang@gmail.com",
    position: "Nhân viên",
    photo: "https://i.pravatar.cc/150?img=7"
  }
];
