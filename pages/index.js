import React from 'react'

//Internal Import 
import Style from '../styles/index.module.css'
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
} from '../components/ComponentsIndex'

const Home = () => {
  return (
    <div className={Style.homepage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading="Audio Collection" paragraph="Discover the most outstanding NFTs in all Topics" />
      <AudioLive />
      <FollowerTab />
      <Slider />
      <Collection />
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all Topics" />
      <Filter />
      <NFTCard />
      <Title heading="Browse By Category" paragraph="Explore the NFTs by Category" />
      <Category />
      <Subscribe />
      <Brand />
      <Video />
    </div>
  )
}

export default Home