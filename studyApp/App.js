import React from 'react';
import { View, Text, ScrollView, TextInput, StyleSheet, Image, FlatList } from 'react-native';

const categories = [
  { name: 'Exercise', tasks: 12, image: require('./assets/exercise.jpg') },
  { name: 'Study', tasks: 12, image: require('./assets/study.jpg') },
  { name: 'Code', tasks: 10, image: require('./assets/code.jpg') },
  { name: 'Cook', tasks: 8, image: require('./assets/cook.jpg') },
  { name: 'Read', tasks: 6, image: require('./assets/read.jpg') },
  { name: 'Shop', tasks: 5, image: require('./assets/shop.jpg') },
  { name: 'Travel', tasks: 4, image: require('./assets/travel.jpg') },
  { name: 'Meditate', tasks: 7, image: require('./assets/meditate.jpg') },

];

const ongoingTasks = [
  'Mobile App Development',
  'Web Development',
  'Push Ups',
  'React Native Study',
  'Grocery Shopping',
  'Book Reading',
  'Cooking Dinner',
  'Yoga Session',
  'Travel Planning',
  'Meditation',
  'Project Meeting',
  'Code Review',
  'Client Call',
  'Workout Routine',
  'Documentation',
];

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, Devs</Text>
        <Image source={require('./assets/profile.png')} style={styles.profileImage} />
      </View>
      <Text style={styles.tasksText}>14 tasks today</Text>
      <TextInput style={styles.searchInput} placeholder="Search" />
      <View style={styles.filterButton}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </View>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <View key={index} style={styles.category}>
            <Image source={category.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category.name}</Text>
            <Text style={styles.categoryTasks}>{category.tasks} Tasks</Text>
          </View>
        ))}
      </View>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={ongoingTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text style={styles.taskText}>{item}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FAF8F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  tasksText: {
    fontSize: 16,
    marginVertical: 8,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
  filterButton: {
    backgroundColor: '#FF6347',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  filterButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  category: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    alignItems: 'center',
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  categoryTasks: {
    fontSize: 14,
    color: '#7F7F7F',
  },
  task: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginVertical: 4,
  },
  taskText: {
    fontSize: 16,
  },
});

export default App;
