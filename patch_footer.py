with open('src/components/layout/Footer.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

connect_link = '              <li><Link to="/connect" className="text-cyan-400 hover:text-cyan-300 transition font-semibold">Connect With Us \u2197</Link></li>\r\n'
admin_link = '              <li><Link to="/admin" className="text-slate-500 hover:text-slate-300 transition text-xs">Admin Prototype Login</Link></li>'

if admin_link in content:
    content = content.replace(admin_link, connect_link + admin_link, 1)
    with open('src/components/layout/Footer.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Done - Connect link added to footer')
else:
    print('ERROR - admin_link pattern not found')
    # show snippet near that area
    idx = content.find('/admin')
    print(repr(content[idx-100:idx+200]))
