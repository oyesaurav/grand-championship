import "@/styles/globals.css"
import Head from "next/head"
import React, { useEffect, useState, Fragment } from "react"
import { MantineProvider, ColorSchemeProvider, Flex, AppShell, Header, Footer } from "@mantine/core"
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, useMantineColorScheme, ActionIcon, Group } from "@mantine/core"
import {
  IconSun, IconMoonStars,
  TablerIcon,
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
  IconWand,
} from "@tabler/icons"
import { Grid, Skeleton, Container } from "@mantine/core"
import { MantineLogo } from "@mantine/ds"

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
    },
  },
}))

function NavbarLink({ icon: Icon, label, active, onClick }) {
  const { classes, cx } = useStyles()
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  )
}

const mockdata = [
  { icon: IconHome2, label: "Home" },
  { icon: IconGauge, label: "Dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics" },
  { icon: IconCalendarStats, label: "Releases" },
  { icon: IconUser, label: "Account" },
  { icon: IconFingerprint, label: "Security" },
  { icon: IconSettings, label: "Settings" },
]

export default function App({ Component, pageProps }) {
  const [active, setActive] = useState(2)
  const [color, setColor] = useState("dark")

  const links = mockdata.map((link, index) => (
    <NavbarLink {...link} key={link.label} active={index === active} onClick={() => setActive(index)} />
  ))

  function changeColor() {
    if (color === "dark") setColor("light")
    else setColor("dark")
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: color,
        }}
      >
        <AppShell
          padding="md"
          navbar={
            <Navbar height={1000} width={{ base: 80 }} p="md">
              <Center>{<MantineLogo type="mark" size={30} />}</Center>
              <Navbar.Section grow mt={50}>
                <Stack justify="center" spacing={0}>
                  {links}
                </Stack>
                <Group position="center" my="xl">
                <ActionIcon
                  onClick={() => changeColor()}
                  size="lg"
                  sx={(theme) => ({
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
                    color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6],
                  })}
                >
                  {color === "dark" ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                </ActionIcon></Group>
              </Navbar.Section>
              <Navbar.Section>
                <Stack justify="center" spacing={0}>
                  <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
                  <NavbarLink icon={IconLogout} label="Logout" />
                </Stack>
              </Navbar.Section>
            </Navbar>
          }
          header={
            <Header height={0} p="xs">
              {/* Header content */}
            </Header>
          }
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[2] },
          })}
        >
          {<Component {...pageProps} />}
        </AppShell>
        <Footer height={60} p="md"></Footer>
      </MantineProvider>
    </>
  )
}
