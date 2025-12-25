export default function parallerLayout(
    {
        children,left_sidebar,right_sidebar
      }:any
) {
    return (
        <><div>
            <h2>Paraller layout </h2>
        </div><section>{children}</section>
        <section>{left_sidebar}</section>
        <section>{right_sidebar}</section>
        
        </>
      );
  }
  