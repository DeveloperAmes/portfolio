export default function ProjectPage({
  h1content,
  p1content,
  p2content,
  p3content,
}) {
  return (
    <section>
      <h1>{h1content}</h1>
      <h2> What is it?</h2>
      <p>{p1content}</p>
      <h3>Inspired by...</h3>
      <p>{p2content}</p>
      <h4>Built with:</h4>
      <p>{p3content}</p>
    </section>
  );
}
