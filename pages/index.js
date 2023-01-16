import React, { useEffect, useState, Fragment } from "react"
import Image from "next/image"
import { Fira_Sans_Extra_Condensed, Inter } from "@next/font/google"
import { Grid, Skeleton, Container } from "@mantine/core"
import { createStyles, ThemeIcon, Progress, Text, Group, Badge, Paper } from '@mantine/core';
import dayjs from 'dayjs';
import {UnstyledButton } from '@mantine/core';
import { IconSwimming, IconBike, IconRun, IconChevronDown, IconChevronUp } from '@tabler/icons';
import { Schedule } from "@/components/schedule";
import { StatsCard } from "@/components/card_with_progress";
import { TableReviews } from "@/components/score_table";
import { CurrentMatches } from "@/components/current_matches";

const child = <Skeleton height={140} radius="md" animate={false} />

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

