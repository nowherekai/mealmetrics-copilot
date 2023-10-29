"use client";

import Image from 'next/image'
import styles from './page.module.css'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { useState } from 'react';
import Footer from '@/components/footer';
import NutritionFacts from '@/components/NutritionFacts';

export default function HomePage() {
  const [nutritionFacts, setNutritionFacts] = useState<string>()

  const handleRecipeSubmit = async () => {
    // Make API call to get nutrition facts
    const response = await fetch('/api/openai', {
      method: 'POST',
      body: JSON.stringify({ recipe: 'your recipe here' }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    setNutritionFacts(data.nutritionFacts)
  }

  return (
    <div className={styles.container}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MealMetrics
          </Typography>
          <Image src="/logo.png" alt="MealMetrics Logo" width={50} height={50} />
        </Toolbar>
      </AppBar>
      <h1 className={styles.title}>Find Nutrition Facts for any recipe</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h2>Enter your recipe</h2>
          <textarea className={styles.textarea} placeholder="Enter your recipe here"></textarea>
          <button className={styles.button} onClick={handleRecipeSubmit}>Submit</button>
        </div>
        <div className={styles.card}>
          <NutritionFacts data={nutritionFacts} />
        </div>
      </div>
      <Footer />
    </div>
  )
}