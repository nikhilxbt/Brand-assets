Asset/pool row. Rows sit inside an `AppCard` with 12px between them.

```jsx
<AppListRow iconSrc="assets/chains/btc.png" name="Bitcoin" sub="0.482 BTC" value="$31,204.10" delta="+2.4%" />
<AppListRow iconSrc="assets/chains/eth.png" badgeSrc="assets/chains/eth.png" name="USDC" sub="Ethereum" value="$8,410.00" delta="-0.1%" deltaDir="down" />
```

Positive values `#77FCBD`, negative `#ED6A6A` — never plain green/red.
