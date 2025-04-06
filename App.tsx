import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const TravelMemoryCard: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const memory = {
    photo: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    location: 'Paris, France',
    date: 'March 20, 2024',
    note: 'Explored the Eiffel Tower at sunset. The view from the top was absolutely breathtaking and the city lights began to twinkle as the sun went down.',
  };

  const handleShare = () => {
    Alert.alert('Memory Shared!', `${memory.location} - ${memory.date}`);
  };

  const handleLocation = () => {
    Alert.alert('Opening location...', memory.location);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fefefe" />

      <Text style={styles.title}>Wanderlust Memories</Text>
      <Text style={styles.subtitle}>Capture your travel moments</Text>

      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image source={{uri: memory.photo}} style={styles.photo} />
          <View style={styles.locationBadge}>
            <Icon name="location-sharp" size={16} color="#007BFF" />
            <Text style={styles.locationText}>{memory.location}</Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.cardTitle}>{memory.location}</Text>
          <Text style={styles.date}>{memory.date}</Text>
          <Text style={styles.note}>{memory.note}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Icon
              name={liked ? 'heart' : 'heart-outline'}
              size={26}
              color={liked ? 'tomato' : '#444'}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleShare}>
            <Icon name="share-outline" size={26} color="#444" />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLocation}>
            <Icon name="navigate-outline" size={26} color="#444" />
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          By <Text style={styles.link}>Akshita Shetty</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default TravelMemoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6fb',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#007BFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  imageWrapper: {
    position: 'relative',
  },
  photo: {
    width: '100%',
    height: 200,
    borderRadius: 14,
  },
  locationBadge: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: '#e7f1ff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#007BFF',
    marginLeft: 5,
    fontSize: 14,
  },
  infoContainer: {
    marginTop: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c3e50',
  },
  date: {
    fontSize: 14,
    color: '#7f8c8d',
    marginVertical: 4,
  },
  note: {
    fontSize: 16,
    color: '#34495e',
    lineHeight: 22,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    paddingHorizontal: 10,
  },
  footer: {
    textAlign: 'right',
    color: '#7f8c8d',
    marginTop: 12,
    fontSize: 13,
  },
  link: {
    color: '#007BFF',
    fontWeight: '500',
  },
});
