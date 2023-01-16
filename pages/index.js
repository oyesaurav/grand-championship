import React, { useEffect, useState, Fragment } from "react"
import { Grid, Skeleton, Container } from "@mantine/core"
import { Schedule } from "@/components/schedule";
import { StatsCard } from "@/components/card_with_progress";
import { TableReviews } from "@/components/score_table";
import { CurrentMatches } from "@/components/current_matches";

export default function Home({ data }) {
  return (
    <>
      <Container my="md">
        <Grid>
          <Grid.Col xs={12}>
            <StatsCard/>
          </Grid.Col>
          <Grid.Col xs={12}>
            <TableReviews/>
          </Grid.Col>
          <Grid.Col xs={12}>
            <Schedule/>
          </Grid.Col>
          <Grid.Col xs={4}>
            <CurrentMatches/>
          </Grid.Col>
          <Grid.Col xs={4}><CurrentMatches/></Grid.Col>
          <Grid.Col xs={4}><CurrentMatches/></Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

