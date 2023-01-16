import React, { useEffect, useState, Fragment } from "react"
import { Grid, Skeleton, Container } from "@mantine/core"
import { Schedule } from "@/components/schedule"
import { StatsCard } from "@/components/card_with_progress"
import { CurrentMatches } from "@/components/current_matches"
import { SportsTable } from "@/components/sports_table"

export default function Home({ data }) {
  return (
    <>
      <Container my="md">
        <Grid>
          <Grid.Col xs={12}>
            <h3>
              Cricket Scores Table
            </h3>
            <SportsTable />
          </Grid.Col>
          <Grid.Col xs={12}>
            <h3>
              Current match
            </h3>
            <CurrentMatches />
          </Grid.Col>
          <h3>
            Past matches
          </h3><br/>
          <Grid.Col xs={4}>
            <CurrentMatches />
          </Grid.Col>
          <Grid.Col xs={4}>
            <CurrentMatches />
          </Grid.Col>
          <Grid.Col xs={4}>
            <CurrentMatches />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}
