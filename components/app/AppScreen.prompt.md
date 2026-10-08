Root shell for any wallet-app screen. Compose the rest of the `App*` components inside it.

```jsx
<AppScreen>
  <AppStatusBar />
  <AppBackHeader title="Earn" />
  <div style={{ flex: 1, padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>…</div>
  <AppBottomNav active="earn" />
</AppScreen>
```

Never use marketing tokens inside the app — the app is Montserrat, #121F32, and solid-blue actions.
