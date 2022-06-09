<a href={relePath(props.distPath, "index.html")} target="_self">
  {
    props.nav.logo ? <img className="logo" width="36" src={relePath(props.distPath, props.nav.logo)} /> : null
  }
</a>